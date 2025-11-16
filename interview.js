const cl = console.log;

const snackbar = (icon, msg) => {
    Swal.fire({
        icon: icon,
        title: msg,
        timer: 1000
    })
}


function hrCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() > 0.5 ? false : true;
            if (!err) {
                let Data = `Candiate Shortlisted for 1st interview round!!!!`
                resolve(Data)
            } else {
                let err = `Looking for another Candidate!!!`
                reject(err)
            }


        }, 800)
    })
}
function firstRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() > 0.3 ? false : true;
            if (!err) {
                let Data = `Candiate Shortlisted for 2nd interview round!!!!`
                resolve(Data)
            } else {
                let err = `Candidate is very poor in basics!!`
                reject(err)
            }


        }, 800)
    })
}

function secondRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() > 0.3 ? false : true;
            if (!err) {
                let Data = `Candiate Shortlisted for 3rd interview round!!!!`
                resolve(Data)
            } else {
                let err = `Candidate is very poor in basics!!`
                reject(err)
            }


        }, 800)
    })
}

function thirdRound() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() > 0.3 ? false : true;
            if (!err) {
                let Data = `Candiate is Shortlisted for given profile!!!!`
                resolve(Data)
            } else {
                let err = `Candidate is very poor in basics!!`
                reject(err)
            }


        }, 800)
    })
}
hrCall()
    .then(res => {
        cl(res)
        return firstRound()
            .then(res => {
                cl(res)
            })
            .then(res => {
                cl(res)
                return secondRound()
            })
            .then(res => {
                cl(res)
                return thirdRound()
            })
            .then(res => {
                cl(res)
                snackbar("success", 'Selected')
            })
    })
    .catch(err => {
        cl(err)
        snackbar("error", '`Candidate is very poor in basics!!')
    })