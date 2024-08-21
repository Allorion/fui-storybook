import './fPrompt.css'

export interface IfPrompt {
    title?: string,
    body?: string,
}


export function getValue(element: HTMLInputElement | null): string | null {
    if (element) {
        return element.value;
    } else {
        return null;
    }
}

const fPrompt = ({ title, body }: IfPrompt): Promise<string | null> => {
    return new Promise((resolve) => {
        window.document.body.insertAdjacentHTML(
            'afterbegin',
            `
            <div class='f-function-block-prompt' id='f-function-block-prompt'>
                <div class='f-function-prompt'>
                   <div class='f-function-prompt-ico warning'>
                        <svg width="28" height="28" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </div>
                   <div class='f-function-prompt-inside'>
                        <div class='f-function-prompt-header'>
                            <h4>${title}</h4>
                        </div>
                        <div class='f-function-prompt-body'>
                            <span>${body}</span>
                            <input 
                                type="text" 
                                id="f-function-prompt-input"
                                class="form-control f-function-prompt-input"
                            />
                        </div>
                        <div class='f-function-prompt-footer'>
                            <button
                                id="f-function-prompt-ok"
                                class='btn btn-success btn-sm'
                                onclick='document.querySelector("#f-function-block-prompt").remove()'
                            >
                                Ок
                            </button>
                            <button
                                id="f-function-prompt-cancellation"
                                class='btn btn-danger btn-sm'
                                onclick='document.querySelector("#f-function-block-prompt").remove()'
                            >
                                Отменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
        );

        const ok: HTMLButtonElement | null = document.querySelector('#f-function-prompt-ok')
        const cancellation: HTMLButtonElement | null = document.querySelector('#f-function-prompt-cancellation')
        const submit: HTMLInputElement | null = document.querySelector('#f-function-prompt-input')

        ok!.addEventListener('click', function () {
            resolve(getValue(submit));
        })
        cancellation!.addEventListener('click', function () {
            resolve(null);
        })

    });
};

export default fPrompt;