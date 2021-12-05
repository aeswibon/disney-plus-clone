import {
    Container,
    Content,
    CTA,
    CTALogoOne,
    SignUp,
    Description,
    CTALogoTwo,
    BgImage,
} from "./StyledLogoElements";

const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an
                        additional fee with a Disney+ subscription. As of
                        05/07/21, the price of Disney+ and The Disney Bundle
                        will increase by $3.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
}

export default Login;