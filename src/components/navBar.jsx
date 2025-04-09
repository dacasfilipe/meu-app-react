import Link from 'next/link';

export default function NavBar() {
return(
    <nav>
        <Link href="/" >Home</Link> |
        <Link href="/sobre" >Sobre</Link> |
        <Link href="/contato" >Contato</Link> |
        <Link href="/produtos" >Produtos</Link> |
        <Link href="/users" >Cadastrar Users</Link>
    </nav>
);
}
