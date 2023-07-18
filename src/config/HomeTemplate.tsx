import { ContainerHome } from '@/assets/styles/Style'
import NavSide from '@/components/Navside/NavSide'
import Profile from '@/components/Profile/Profile'
import { ContentGroup } from '@/assets/styles/Style'
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import TokenContext from '@/Context/TokenContext';
import TokenNotFound from '@/components/Error/TokenNotFound';

type Props = {
    children: ReactNode; 
}

const HomeTemplate = ({ children }: Props) => {
  const contextToken = useContext(TokenContext);

  if (!contextToken) {
    throw new Error('contextToken not found.');
  }

  const { token } = contextToken;
  const StorageToken = localStorage.getItem('AUTH_TOKEN');
  console.log('token provider:' , token)
  console.log('token storage:' , StorageToken)
  return (
    <>
      {token || StorageToken ? (
        <ContainerHome>
          <NavSide />
          <ContentGroup>
            <Profile />
            {children}
          </ContentGroup>
        </ContainerHome>
      ) : (
        <TokenNotFound/>
      )}
    </>
  )
}

export default HomeTemplate;
