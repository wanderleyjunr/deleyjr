import NextLink from 'next/link'
import * as S from './styles'


const Main = () => (
  <S.Wrapper>  
    
    <NextLink passHref href='https://deleyjr.com/' prefetch>
      <a>
      <S.Illustration
        src="/img/livro_deleyjr.jpg"
        alt="Descubra a si mesmo - Livro Deleyjr"
      />
      </a>
    </NextLink>  
    
    <NextLink passHref href='https://www.youtube.com/channel/UCqgnO9NMICuDQrY5CT6YqrQ' prefetch >
      <a>
        <S.Illustration
          src="/img/yt_deleyjr.jpg"
          alt="Canal no Youtube Deleyjr"
        />
      </a>
    </NextLink>
    
    <NextLink passHref href='' >
      <S.Illustration
          src="/img/tw_deleyjr.jpg"
          alt="Acesse o Twitter Deleyjr"
        />
    </NextLink>

    <NextLink passHref href='https://chat.whatsapp.com/GNn4oyJRXB07iwVlSUDVG4' >
      <S.Illustration
        src="/img/wp_deleyjr.jpg"
        alt="Entra no grupo do WhatsApp do Deleyjr"
      />
    </NextLink>

  <S.Div>
    <S.Description>Wanderley Junior. © 1996 – 2022  Todos os direitos reservados</S.Description>
  </S.Div>

  </S.Wrapper>
)

export default Main
