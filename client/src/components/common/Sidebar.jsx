import { Box, Drawer, IconButton, List, ListItemButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import AddBoxOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import assets from "../../assets/index"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import memoApi from '../../api/memoApi'
import { setMemo } from '../../redux/features/memoSlice'

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.value)
    const memos = useSelector((state) => state.memo.value)
    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    useEffect(() => {
        const getMemos = async () => {
            try{
                const res = await memoApi.getAll();
                console.log(res);
                dispatch(setMemo(res));
                console.log("memo1")
                console.log(memos)
            }catch(err){
                alert(err);
            }
        }
        getMemos()
    },[dispatch])

    useEffect(()=> {
        console.log("memo2")
        console.log(memos)
    },[memos])
  return (
    <Drawer 
        container={window.document.body}
        variant='permanent'
        open={true}
        sx={{width: 250, height:"100vh"}}
    >
        <List sx={{width: 250, height: "100vh", backgroundColor: assets.colors.secondary}}>
            <ListItemButton>
                <Box sx={{
                    width: "100%", 
                    display:"flex",
                    alignItems: "center", 
                    justifyContent: "space-between"
                    }}
                >
                    <Typography variant='body2' fontWeight="700">
                        {user.username}
                    </Typography>
                    <IconButton onClick={logout}>
                        <LogoutOutlinedIcon />
                    </IconButton>
                </Box>
            </ListItemButton>
            <Box sx={{paddingTop: "10px"}}></Box>
            <ListItemButton>
                <Box sx={{
                    width: "100%", 
                    display:"flex",
                    alignItems: "center", 
                    justifyContent: "space-between"
                    }}
                >
                    <Typography variant='body2' fontWeight="700">
                        お気に入り
                    </Typography>
                </Box>
            </ListItemButton>
            <Box sx={{paddingTop: "10px"}}></Box>
            <ListItemButton>
                <Box sx={{
                    width: "100%", 
                    display:"flex",
                    alignItems: "center", 
                    justifyContent: "space-between"
                    }}
                >
                    <Typography variant='body2' fontWeight="700">
                        プライベート
                    </Typography>
                    <IconButton>
                        <AddBoxOutlinedIcon fontSize='small'/>
                    </IconButton>
                </Box>
            </ListItemButton>
            {memos.map((item, index) => {
                {console.log(item.tilte)}
                return (<ListItemButton 
                    sx={{pl:"20px"}} 
                    component={Link} 
                    to={`/memo/${item._id}`} 
                    key={item._id}
                    selected={true}
                >
                    <Typography>
                        {item.icon} {item.title}
                    </Typography>
                </ListItemButton>
                )
            })}

        </List>
    </Drawer>
  )
}

export default Sidebar
