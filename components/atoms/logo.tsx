import Image from "next/image";
import React from "react";

export function PrimaryLogo() {
  return (
    <Image
      src={"/assets/images/logo.svg"}
      alt="logo"
      width={129}
      height={54}
      draggable={false}
    />
  );
}

export function SecondaryLogo() {
  return (
    <Image
      src={"/assets/images/logo_light.svg"}
      alt="logo"
      width={86}
      height={36}
      draggable={false}
    />
  );
}

export function Logo() {
  return (
    <Image
      src={"/assets/images/logo.jpg"}
      alt="logo"
      width={86}
      height={36}
      draggable={false}
    />
  );
}
