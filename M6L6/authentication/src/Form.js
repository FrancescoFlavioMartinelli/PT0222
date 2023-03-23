export const Form = ()=>{

    const signup = (e)=>{
        e.preventDefault();
    }

    const login = (e)=>{
        e.preventDefault();
    }

    return (<>

        <h1>REGISTRAZIONE</h1>
        <form onSubmit={signup}>
            <input name="username" required />
            <input name="mail" required />
            <input name="name" required />
            <input type="password" name="password" required />
            <input type="password" name="passwordCopy" required />
            <button type="submit">INVIA</button>
        </form>


        <hr />

        <h1>LOGIN</h1>
        <form onSubmit={login}>
            <input name="username" required />
            <input type="password" name="password" required />
            <button type="submit">INVIA</button>
        </form>

    </>)
}