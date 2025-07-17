"use client";
import React from "react";
import { Layout, theme } from "antd";
import { About, Instructions, NavBar, Search } from "@/components";

const { Header, Content, Footer } = Layout;

function page() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100%",
          height: 64,
          padding: "0",
          backgroundColor: "#1b1b32",
        }}
      >
        <NavBar />
      </Header>
      <Content style={{ paddingTop: 64 }}>
        <div
          style={{
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <h1 className="text-center text-[23px] font-medium md:text-[40px] md:font-medium">
            Donwload your favorites videos
          </h1>
          <Search />
          <hr />
          <Instructions />
          <hr />
          <About />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <p className="text-center text-[10px]">@ 2025 CodeReview</p>
      </Footer>
    </Layout>
  );
}

export default page;
