import { Layout} from 'antd';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const { Header, Content, Footer} = Layout;

interface ILayoutGeral{
  children : ReactJSXElement
}
function LayoutGeral ({children} : ILayoutGeral) {


  return (
    <Layout>
      <Header className="header">
      </Header>
      <Content style={{padding: '50px 50px', margin:"100px 50px", backgroundColor:"blue"}}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor:"red", alignItems:"end" }}>©2023 Created by Rafael Carlos De Souza</Footer>
    </Layout>
  );
};

export default LayoutGeral;