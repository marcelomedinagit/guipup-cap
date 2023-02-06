function calculateInches(req) {
    debugger;
    return 1
}

function calculateInchesx(req) {
    return req.grossKg * 2.2 * req.casesPerPallet + 50
}

function calculatePalletWeight(req) {
    return req.palletTotalHeight / 25.4
}

function casesPerContainer(req) {
    let _40qtyPallets = this.calculate40QTYUnits(req)
    return _40qtyPallets / req.caseCount
}

function calculate40QTYUnits(req) {
    return 20 * req.caseCount * casesPerPallet
}

function calculateContainerWtLbs(req) {
    let casesPerContainer = this.casesPerContainer(req)
    return casesPerContainer * grossKg * 2.2
}

function calculateFOBPerPack(req) {
    return req.palletTotalHeight / 25.4
}

module.exports = {
    async calculate(sql) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(sql.data)
                sql.inches = calculateInches(sql),

                    resolve(sql);
            }

            catch (ex) {
                reject("We messed up! " + ex);
            }
        });
    }
};