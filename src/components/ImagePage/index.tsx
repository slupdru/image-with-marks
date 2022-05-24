import React from "react";
import { MarkData, ImageData } from "../../types";
import styles from "./index.module.scss";
import { Mark } from "./Mark";
import { MarkInput } from "./MarkInput";
import { v1 } from "uuid";

export const ImagePage = ({ name, size, url }: ImageData) => {
  const [markInputState, setMarkInputState] = React.useState<MarkData>();
  const [marksList, setMarksList] = React.useState<MarkData[]>([]);
  // ref на изображение
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Изменяем текст метки, при наборе
  const handleChangeMarkInput = React.useCallback((text: string) => {
    setMarkInputState((state) => (state ? { ...state, text } : undefined));
  }, []);

  // Добавляем поле ввода метки, при двойном клике
  const handleDoubleClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (!imgRef.current || imgRef.current !== e.target) {
        return;
      }
      const { clientHeight, clientWidth } = imgRef.current;
      const { offsetX, offsetY } = e.nativeEvent;
      setMarkInputState({
        leftPercent: (offsetX / clientWidth) * 100,
        topPercent: (offsetY / clientHeight) * 100,
        text: "",
        id: v1(),
      });
    },
    []
  );

  // Добавляем метку при клике, если есть text в поле ввода
  const handleClick = React.useCallback(() => {
    if (!markInputState) return;
    if (markInputState.text) {
      setMarksList((list) => [...list, markInputState]);
    }
    setMarkInputState(undefined);
  }, [markInputState]);

  return (
    <div
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
      className={styles.root}
      style={
        {
          "--image-height": size.height, // устанавливаем css переменные для расчета шрифта меток,
          "--image-width": size.width, // а также aspect-ratio контейнера
        } as React.CSSProperties
      }
    >
      <img alt={name} className={styles.image} src={url} ref={imgRef} />
      {marksList.map((el) => (
        <Mark key={el.id} {...el} />
      ))}
      {markInputState && (
        <MarkInput {...markInputState} onChange={handleChangeMarkInput} />
      )}
    </div>
  );
};
