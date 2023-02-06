function calculateInches(req) {
    return req.palletTotalHeight / 25.4
}

function calculateInches(req) {
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
                /* const result = await pool.query(sql);
                const DBresponse = result.rows.map(row => {
                    let str = JSON.stringify(row)
                    let parsed = JSON.parse(str);
                    return parsed;
                }) */
                return {
                    inches: this.calculateInches()
                }
                resolve(DBresponse);
            }

            catch (ex) {
                reject("We messed up! " + ex);
            }
        });
    }
};