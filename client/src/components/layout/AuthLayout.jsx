import { Container, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import notionLogo from "../../assets/images/notion-logo.png"
import authUtils from "../../utlis/authUtils"

const AuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //JWTを持っているのか確認
    const checkAuth = async () => {
      //認証チェック
      const isAuth = await authUtils.isAuthenticated();
      if(isAuth) {
        navigate("/")
      }
    }
    checkAuth();
  }, [navigate])
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box sx={{
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <img
                src={notionLogo}
                alt=""
                style={{width: 100, height:100 , marginBottom: 3}}
            ></img>
            Notionクローン開発
        </Box>
        <Outlet />
      </Container>
    </div>
  )
}

export default AuthLayout
