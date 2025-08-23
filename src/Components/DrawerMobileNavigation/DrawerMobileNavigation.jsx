import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItem from '@mui/joy/ListItem';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavLink as Link } from 'react-router-dom';
import { AiOutlineDashboard } from "react-icons/ai";

export default function DrawerMobileNavigation({ navLinks, className }) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className={className} >
            <React.Fragment>
                <IconButton color="neutral" onClick={() => setOpen(true)}>
                    <HiOutlineMenuAlt3 />
                </IconButton>
                <Drawer open={open} onClose={() => setOpen(false)}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            ml: 'auto',
                            mt: 1,
                            mr: 2,
                            width: '100%',
                            justifyContent: 'flex-end',
                            p: 2
                        }}
                    >
                        <Typography
                            component="label"
                            htmlFor="close-icon"
                            sx={{ fontSize: 'lg', fontWeight: 'lg', cursor: 'pointer' }}
                        >
                            Close
                        </Typography>
                        <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                    </Box>
                    <AccordionGroup sx={{ width: '100%' }}>
                        <List
                            sx={{
                                'justifyContent': 'space-between', 'width': '100%'
                            }}
                        >
                            <div>
                                {navLinks.map((link) => (
                                    <ListItem sx={{ width: '100%', justifyContent: 'space-between' }} key={link.title}>
                                        <Accordion sx={{ width: '100%', }}>
                                            <AccordionSummary>{link.title}</AccordionSummary>
                                            <AccordionDetails>
                                                <List>
                                                    {link.sections.map((section) => (
                                                        <ListItem key={section.name}>
                                                            <ListItemButton sx={{ fontSize: '1.6rem' }} component={Link} to={section.to} onClick={() => setOpen(false)}>
                                                                {section.name}
                                                            </ListItemButton>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </AccordionDetails>
                                        </Accordion>

                                    </ListItem>
                                ))}
                            </div>
                            <ListItemButton sx={{ fontSize: '1.8rem', alignSelf: 'flex-end', marginBottom: '1.6rem', marginRight: '0.75rem' }} component={Link} to={'/dashboard'} onClick={() => setOpen(false)}>
                                <AiOutlineDashboard />  Dashboard
                            </ListItemButton>
                        </List>
                    </AccordionGroup>
                </Drawer>
            </React.Fragment>
        </div >
    );
}
