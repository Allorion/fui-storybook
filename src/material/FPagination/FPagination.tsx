import React, {FC} from 'react';
import {usePagination, DOTS} from './hooks/usePagination';
import "./FPagination.css"

export interface IFPagination {
    currentPage: number,
    totalCount: number,
    pageSize: number,
    onPageChange: (page: number | string | number) => void,
    id?: string,
    className?: string,
    st?: React.CSSProperties | undefined
    siblingCount: 0 | 1 | 2
}

const FPagination: FC<IFPagination> = ({
                                           currentPage,
                                           totalCount,
                                           pageSize,
                                           onPageChange,
                                           id,
                                           className,
                                           st,
                                           siblingCount
                                       }) => {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // @ts-ignore
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    // @ts-ignore
    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <React.Fragment>
            <ul
                className={`pagination-container ${className !== undefined ? className : ''}`}
                style={st}
                id={`${id !== undefined ? id : ''}`}
            >
                <li
                    className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={onPrevious}
                >
                    <div className="arrow left"/>
                </li>
                {/*@ts-ignore*/}
                {paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots">&#8230;</li>;
                    }

                    return (
                        <li
                            className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''}`}
                            id={'test-id'}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className={`pagination-item ${currentPage === lastPage ? 'disabled' : ''}`}
                    onClick={onNext}
                >
                    <div className="arrow right"/>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default FPagination;
