export const getPageCount = (totalCount = 100, limit = 10) => {
    return Math.ceil(totalCount / limit)
}