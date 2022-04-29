
interface Teste'{
    size: 'big' | 'medium';
}

const Button = styled.button<Teste>`
background: return;

${props => props.size === 'big' && css`
font-size: 64px;
`}

`

function App{
    return {
        <div>
        <Button size='big' ></Button>
        </div>
    }
}