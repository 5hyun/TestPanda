import React from "react";
import "@/shared/styles/variables.css";

export default function Layout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      {/* modal 폴더랑 layout.tsx랑 같은 폴더에 있어서 에러가 안남 */}
      {modal}
    </div>
  );
}
