import dateFormat from "dateformat"

export function isodateToHuman(s, adjust) {
    var d = new Date(s);
    if (d.getUTCHours() + d.getUTCMinutes() + d.getUTCSeconds() == 0) { 
        if (adjust) {
            d.setDate(d.getDate() - 1);
        }
        return dateFormat(d,"d mmm yyyy");
    }
    else {
        return dateFormat(d,"d mmm yyyy HH:MM:ss");
    }
}