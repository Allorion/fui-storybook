import ReactDOM from "react-dom/client";
import {generateUniqueId} from "./generateUniqueId";

export function jsxToHtml(element: JSX.Element): Promise<Element | null> {
    return new Promise((resolve) => {
        const container = document.createElement('div');
        const root = ReactDOM.createRoot(container);

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.addedNodes.length) {
                    // Проверяем добавление элементов с нужным ID
                    const table = container.querySelector(`#${generateUniqueId()}`);
                    if (table) {
                        observer.disconnect(); // Отключаем наблюдателя
                        resolve(table);
                    }
                }
            }
        });

        root.render(element);

        observer.observe(container, {childList: true, subtree: true});
    });
}