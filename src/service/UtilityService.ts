export const useUtilityService = () => {
    const toTitleCase = (value: string) => {
        console.log(value)
        const h = value.at(0);
        const u = h?.toUpperCase();
        if (value.length == 0) {
            return u;
        }
        return `${u}value.substring(1)`
    }

    return { toTitleCase }
}