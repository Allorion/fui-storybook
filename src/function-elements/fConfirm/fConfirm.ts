import './fConfirm.css'

export interface IfConfirm {
    title?: string,
    body: string,
}

const fConfirm = ({title, body}: IfConfirm): Promise<boolean> => {
    return new Promise((resolve) => {
        window.document.body.insertAdjacentHTML(
            'afterbegin',
            `
            <div class='f-function-block-confirm' id='f-function-block-confirm'>
                <div class='f-function-confirm'>
                    <div class='f-function-confirm-ico warning'>
                        <svg width="28" height="28" viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path
                                d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                    </div>
                    <div class='f-function-confirm-inside'>
                        <div class='f-function-confirm-header'>
                            <h4>${title !== undefined ? title : ''}</h4>
                        </div>
                        <div class='f-function-confirm-body'>
                            <span>${body}</span>
                        </div>
                        <div class='f-function-confirm-footer'>
                            <button
                                id="f-function-confirm-ok"
                                class='btn btn-success btn-sm'
                                onclick='document.querySelector("#f-function-block-confirm").remove()'
                            >
                                Ок
                            </button>
                            <button
                                id="f-function-confirm-cancellation"
                                class='btn btn-danger btn-sm'
                                onclick='document.querySelector("#f-function-block-confirm").remove()'
                            >
                                Отменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
        );

        let ok = document.querySelector('#f-function-confirm-ok')
        let cancellation = document.querySelector('#f-function-confirm-cancellation')


        ok!.addEventListener('click', function () {
            resolve(true);
        })
        cancellation!.addEventListener('click', function () {
            resolve(false);
        })

    });
};

export default fConfirm;