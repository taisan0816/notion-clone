import { Container, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import notionLogo from "../../assets/images/notion-logo.png"
import authUtils from "../../utlis/authUtils"
import Sidebar from '../common/Sidebar'

const AppLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //JWTを持っているのか確認
    const checkAuth = async () => {
      //認証チェック
      const user = await authUtils.isAuthenticated();
      if(!user) {
        navigate("/login")
      }
    }
    checkAuth();
  }, [navigate])
  return (
    <div>
        <Box sx={{display: "flex"}}>
            <Sidebar />
            <Box sx={{flexGrow: 1, p: 1, width: "max-content"}}>
                <Outlet />
            </Box>
        </Box>
    </div>
  )
}

export default AppLayout
