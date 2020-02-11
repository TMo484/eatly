export const CHANGE_PAGE = 'CHANGE_PAGE'
export const CHANGE_QUERYTERMS = 'CHANGE_QUERYTERMS'

export function changePage(page) {
    return {
        type: CHANGE_PAGE,
        page
    }
}

export function changeQueryTerms(terms) {
    return {
        type: CHANGE_QUERYTERMS,
        terms
    }
}