import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialLogo, WebsiteRights, SocialMediaWrap, SocialIcons, SocialIconLink  } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle> About Us </FooterLinkTitle>
                          <FooterLink to="signin">How It Works</FooterLink>
                          <FooterLink to="signin">Testimonials</FooterLink>
                          <FooterLink to="signin">Careers</FooterLink>
                          <FooterLink to="signin">Investors</FooterLink>
                          <FooterLink to="signin">Terms of Services</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle> Videos </FooterLinkTitle>
                          <FooterLink to="signin">How It Works</FooterLink>
                          <FooterLink to="signin">Testimonials</FooterLink>
                          <FooterLink to="signin">Careers</FooterLink>
                          <FooterLink to="signin">Investors</FooterLink>
                          <FooterLink to="signin">Terms of Services</FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle> Contact Us </FooterLinkTitle>
                          <FooterLink to="signin">How It Works</FooterLink>
                          <FooterLink to="signin">Testimonials</FooterLink>
                          <FooterLink to="signin">Careers</FooterLink>
                          <FooterLink to="signin">Investors</FooterLink>
                          <FooterLink to="signin">Terms of Services</FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle> Social Media </FooterLinkTitle>
                          <FooterLink to="signin">How It Works</FooterLink>
                          <FooterLink to="signin">Testimonials</FooterLink>
                          <FooterLink to="signin">Careers</FooterLink>
                          <FooterLink to="signin">Investors</FooterLink>
                          <FooterLink to="signin">Terms of Services</FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to='/'>
                      Un-Tomodachi
                  </SocialLogo>
                  <WebsiteRights> dolla © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                  <SocialIcons>
                  <SocialIconLink href='/' target='_blank' aria-label='Facebook'> 
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label='Instagram'> 
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href='//www.twitter.com/Weekappp' target='_blank' aria-label='Twitter'> 
                    <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label='Youtube'> 
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label='Linkedin'> 
                    <FaLinkedin />
                  </SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
