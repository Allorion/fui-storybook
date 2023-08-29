import React, {FC} from "react";
import {FButton, FStack, FTextField} from "fui-material";


const FSearchBox: FC = () => {

    return(
        <React.Fragment>
            <FStack
                direction={'row'}
                st={{
                    marginBottom: '0px',
                    position: 'relative',
                    width: 'fit-content'
                }}
            >
                <FTextField
                    className={'dsadsaadsa'}
                    st={{
                        marginBottom: '0px',
                        borderTopRightRadius: '0',
                        borderBottomRightRadius: '0',
                    }}
                />
                <FButton
                    st={{
                        position: 'absolute',
                        width: 'fit-content',
                        border: 'none',
                        outline: 'none',
                        right: '-40px',
                        height: '100%',
                        borderTopLeftRadius: '0',
                        borderBottomLeftRadius: '0',
                    }}
                >
                    ...
                </FButton>
            </FStack>
        </React.Fragment>
    )
}

export default FSearchBox
