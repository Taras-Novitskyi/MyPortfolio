import React, { useState, useCallback } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";

import {
  SocialContainer,
  Title,
  SocLinkList,
  Link,
  SocLinkItem,
} from "./Social.styled";

export const Social: React.FC = () => {
  return (
    <SocialContainer>
      <SocLinkList>
        <SocLinkItem>
          <Link
            href="https://www.facebook.com/taras.novitskyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook size={36} />
          </Link>
        </SocLinkItem>
        <SocLinkItem>
          <Link
            href="https://github.com/Taras-Novitskyi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={36} />
          </Link>
        </SocLinkItem>
        <SocLinkItem>
          <Link
            href="https://t.me/TarasNovitskyi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram size={36} />
          </Link>
        </SocLinkItem>
        <SocLinkItem>
          <Link
            href="https://www.instagram.com/tariknovitskyi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={36} />
          </Link>
        </SocLinkItem>
        <SocLinkItem>
          <Link
            href="https://www.linkedin.com/in/taras-novitskyi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={36} />
          </Link>
        </SocLinkItem>
      </SocLinkList>
    </SocialContainer>
  );
};
