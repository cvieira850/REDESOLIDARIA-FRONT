import XLSX from "xlsx";

export function validadePhoneAndEmail(email, phone = null) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
        alert("O email informado está incorreto");
        return false;
    }

    if (phone !== null) {
        if (phone === "") {
            alert("O número informado está incompleto");
            return false;
        } else if (phone.length === 15 || phone.length === 14) {
            let phoneTeste = phone.split(")", 2);

            if (phoneTeste[0].length !== 3) {
                alert("O DDD informado está incorreto");
                return false;
            }
        } else {
            alert("O telefone informado está incorreto");
            return false;
        }
    }

    return true;
}

export function getDateTime(isMilliseconds) {
    const d = new Date();

    if (isMilliseconds) return d.getTime();

    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    return `${day}-${month}-${year} ${hour}-${min}-${sec}`;
}

export function jsonToFile(json, opts = null) {
    try {
        const sheet_to_workbook = (sheet, opts) => {
            var n = opts && opts.sheet ? opts.sheet : "Sheet1";
            var sheets = {};
            sheets[n] = sheet;
            return { SheetNames: [n], Sheets: sheets };
        };

        const wb = sheet_to_workbook(XLSX.utils.aoa_to_sheet(json, opts), opts);

        XLSX.writeFile(
            wb,
            `Cotação Massiva Populada #${getDateTime(true)}.xlsx`,
            { cellStyles: true }
        );
    } catch (e) {
        return false;
    } finally {
        return true;
    }
}

export function fileToJson(e) {
    try {
        let jsonFromFile = {};

        let data = new Uint8Array(e.target.result);
        let workbook = XLSX.read(data, { type: "array" });

        workbook.SheetNames.forEach(function(sheetName) {
            let roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
                header: 1
            });
            if (roa.length) jsonFromFile[sheetName] = roa;
        });

        return jsonFromFile;
    } catch (e) {
        console.log(e);
        alert(
            "O arquivo que você inseriu é muito grande, ou possui algum erro."
        );
    }
}

export function capitalize(text) {
    let resp = "";

    if (typeof text === "undefined" || text === null || text === "")
        return resp;

    for (var i = 0; i < text.length; i++) {
        if ((i > 0 && text[i - 1] === " ") || i === 0)
            resp += text[i].toUpperCase();
        else resp += text[i].toLowerCase();
    }
    return resp;
}

export function replaceSpaces(string, replace) {
    let newString = "";

    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") newString += replace;
        else newString += string[i];
    }

    return newString;
}

export function maskCNPJ(cnpj, checkDigits) {
    cnpj += "";

    if (checkDigits) {
        const zeros = 14 - cnpj.length;

        if (zeros > 0) {
            for (var i = 0; i <= zeros - 1; i++) cnpj = "0" + cnpj;
        }
    }

    return cnpj
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5");
}

export function clearCNPJ(cnpj, removeZeros = false) {
    let clearCNPJ = "";
    let noZeroCNPJ = "";

    if (cnpj === null) return "";

    if (removeZeros) {
        let isRemoved = false;
        for (var i = 0; i < cnpj.length; i++) {
            if (isRemoved || cnpj[i] !== "0") noZeroCNPJ += cnpj[i];
            if (!isRemoved || (cnpj[i] === "0" && cnpj[i] !== "0"))
                isRemoved = true;
        }
    } else {
        noZeroCNPJ = cnpj;
    }

    for (var i = 0; i < noZeroCNPJ.length; i++)
        if (
            noZeroCNPJ[i] !== "." &&
            noZeroCNPJ[i] !== "/" &&
            noZeroCNPJ[i] !== "-"
        )
            clearCNPJ += noZeroCNPJ[i];

    return clearCNPJ.length > 0 ? clearCNPJ : noZeroCNPJ;
}
