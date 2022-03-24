import styled from 'styled-components'

const Wrapper = styled.section`
    display: grid;
    align-items: center;
    
    .logo {
        display: block;
        object-fit: cover;
        margin: 0 auto;
        margin-bottom: 1.38rem;
        width: 100%;
        max-height: 225px;
    }
    .form {
        max-width: 400px;
        align-items: center;
        border-top: 5px solid #DDE7EA;
        flex-direction: column;
    }
    .form-input {
        align-items: center;
        max-width: 100%;
    }
    .input.form-input {
        width: 100%;
    }
    h3 {
        text-align: center;
        color: #DDE7EA;

    }
    p {
        margin: 0;
        margin-top: 1rem;
        text-align: center;
    }
    .btn {
        margin-top: 1rem;
        font-family: "Poppins"
    }
    .member-btn {
        background: transparent;
        border: transparent;
        color: #0a4d82;
        cursor: pointer;
        letter-spacing: 1px;
    }

`

export default Wrapper