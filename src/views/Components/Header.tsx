import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 2rem;
    height: fit-content;
    color: #ffc107;
`
const Header: React.FunctionComponent = () => {

    return (
        <header className="col-12 ps-3 mb-3">
            <nav className="d-flex justify-content-between align-items-center flex-wrap">
                <img src="/logo-light.webp" alt="logo" className="img-fluid" width={150} />
                <H1>Challenge Encriptador - Oracle ONE</H1>
            </nav>
        </header>
    )
}

export default Header