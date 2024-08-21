import { FC, ReactNode, useEffect, useRef } from "react";

import './FSkeleton.css'

export interface IFSkeleton {
    children: ReactNode;
    enable: boolean;
    width?: string;
    height?: string
}

const FSkeleton: FC<IFSkeleton> = ({
    children,
    enable,
    width,
    height,
}) => {

    const elementRef = useRef<HTMLDivElement>(null);

    const originalElements = useRef<Element[]>([]); // Используем useRef для сохранения исходных элементов

    useEffect(() => {
        // Проверяем, что ref установлен и что у него есть дочерние элементы
        if (elementRef.current && elementRef.current.children.length > 0) {
            if (enable) {
                // Заменяем элементы на скелетоны и сохраняем исходные элементы
                const childrenArray = Array.from(elementRef.current.children);
                childrenArray.forEach((child, index) => {
                    const skeleton = document.createElement('div');
                    skeleton.className = 'skeleton';

                    const childStyles = window.getComputedStyle(child);

                    // Копируем стили ширины, высоты и скругления углов
                    skeleton.style.width = width === undefined ? childStyles.width : width;
                    skeleton.style.height = height === undefined ? childStyles.height : height;
                    skeleton.style.borderRadius = childStyles.borderRadius === '0px' ? '10px' : childStyles.borderRadius;
                    skeleton.style.marginLeft = childStyles.marginLeft;
                    skeleton.style.marginRight = childStyles.marginRight;
                    skeleton.style.marginTop = childStyles.marginTop;
                    skeleton.style.marginBottom = childStyles.marginBottom;

                    // Сохраняем исходный элемент
                    originalElements.current[index] = child;

                    if (child.parentNode) {
                        // Заменяем исходный элемент на скелетон
                        child.parentNode.replaceChild(skeleton, child);
                    }
                });
            } else {
                // Восстанавливаем исходные элементы
                originalElements.current.forEach((originalChild, index) => {
                    if (elementRef.current) {
                        const skeleton = elementRef.current.children[index];
                        if (skeleton && originalChild && skeleton.parentNode) {
                            skeleton.parentNode.replaceChild(originalChild, skeleton);
                        }
                    }
                });
            }
        }
    }, [enable]);


    return <div ref={elementRef} className={'skeleton-block'}>{children}</div>;

};

export default FSkeleton;