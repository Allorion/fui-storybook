import React, {FC} from 'react';
import {FStack, FCloseIcon, FDialog, FArrowIcon} from "../index";
import './FOpenImgFull.css'

export interface IFOpenImgFull {
    id?: string,
    className?: string,
    st?: React.CSSProperties,
    imagesUrl: string[],
    selectedImg: number,
    handleClose?: () => void,
    setSelectedImg: (number: number) => void,
    openAndClose: boolean
}

const FOpenImgFull: FC<IFOpenImgFull> = ({
                                             id,
                                             className,
                                             st,
                                             imagesUrl,
                                             selectedImg,
                                             setSelectedImg,
                                             handleClose,
                                             openAndClose
                                         }) => {

    let style: React.CSSProperties = {
        boxShadow: '2px 2px 10px 5px rgb(0 0 0 / 0%)',
        backgroundColor: "inherit",
        overflow: "inherit",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '80%',
        maxHeight: '80%',
        padding: '90px'
    }

    if (st !== undefined) {
        style = Object.assign(style, st)
    }

    return (
        <React.Fragment>
            {imagesUrl.length !== 0 && selectedImg >= 0 && selectedImg < imagesUrl.length &&
                <FDialog
                    openAndClose={openAndClose}
                    st={style}
                    className={className}
                    id={id}
                >
                    <div className={'fv-opn-img-full-body'}>
                        <FStack
                            direction={'row-reverse'}
                            spacing={2}
                        >
                            <div
                                style={{
                                    position: 'fixed',
                                    top: '70px',
                                    right: '20px'
                                }}
                            >
                                {handleClose !== undefined &&
                                    <FCloseIcon
                                        handleClose={() => {
                                            handleClose()
                                            document.body.style.overflow = 'auto'
                                        }}
                                    />
                                }
                            </div>
                            <FStack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'center'}>
                                {selectedImg > 0 ?
                                    <FArrowIcon
                                        direction={'left'}
                                        handleClick={() => setSelectedImg(selectedImg - 1)}
                                    />
                                    :
                                    <div style={{width:'35px', height:'35px'}}>ㅤ</div>
                                }
                                <img
                                    src={imagesUrl[selectedImg]}
                                    style={{
                                        objectFit: 'contain',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                                {selectedImg < imagesUrl.length - 1 ?
                                    <FArrowIcon
                                        direction={'right'}
                                        handleClick={() => setSelectedImg(selectedImg + 1)}
                                    />
                                    :
                                    <div style={{width:'35px', height:'35px'}}>ㅤ</div>
                                }
                            </FStack>
                        </FStack>
                    </div>
                </FDialog>
            }
        </React.Fragment>
    );
};

export default FOpenImgFull;