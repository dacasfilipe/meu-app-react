import Link from 'next/link';

export default function LinkBotao({href, texto}) {
    return(
        <Link href={href} >
           <a>
            {texto}
           </a>
        </Link>
    )
}