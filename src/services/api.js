export async function signIn({ username, password }) { 
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            if(username === "matias" && password === "teste"){
                resolve();
            } else { 
                reject();
            }
        }, 1000);
    });
}