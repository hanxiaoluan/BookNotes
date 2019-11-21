/**
 * @params 
 * @returns 
 */
export function getTodayTime() {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

export function preDay(timestamp = (new Date()).getTime() + 86400000, num = 0) {
    const date = new Date(timestamp - num * 86400000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${year}${month}${day}`;
}

export const titleTime = (time) => `${time.substr(4, 2)}月${time.substr(6)}日`