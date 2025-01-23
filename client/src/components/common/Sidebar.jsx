import { Box, Drawer, IconButton, List, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import AddBoxOutlinedIcon from "@mui/icons-material/LogoutOutlined"

function Sidebar() {
  return (
    <Drawer 
        container={window.document.body}
        variant='permanent'
        open={true}
        sx={{width: 250, height:"100vh"}}
    >
        <List sx={{width: 250, height: "100vh"}}>
            <ListItemButton>
                <Box sx={{
                    width: "100%", 
                    display:"flex",
                    alignItems: "center", 
                    justifyContent: "space-between"
                    }}
                >
                    <Typography variant='body2' fontWeight="700">
                        shincode
                    </Typography>
                    <IconButton>
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
                        プライベート
                    </Typography>
                    <IconButton>
                        <AddBoxOutlinedIcon />
                    </IconButton>
                </Box>
            </ListItemButton>
            <ListItemButton>
                <Box sx={{
                    width: "100%", 
                    display:"flex",
                    alignItems: "center", 
                    justifyContent: "space-between"
                    }}
                >
                    <Typography variant='body2' fontWeight="700">
                        shincode
                    </Typography>
                    <IconButton>
                        <LogoutOutlinedIcon />
                    </IconButton>
                </Box>
            </ListItemButton>
        </List>
    </Drawer>
  )
}

export default Sidebar
