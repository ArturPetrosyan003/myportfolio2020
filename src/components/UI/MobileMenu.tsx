import React, { Component, useState } from "react";

import about from "@icons/user.png";
import skills from "@icons/skill.png";
import works from "@icons/work.png";
import contact from "@icons/contact.png";

import { Drawer, List, ListItem } from "@material-ui/core";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                style={{
                    marginLeft: "93%",
                    cursor: "pointer",
                    visibility: isOpen ? "hidden" : "visible",
                    position: 'absolute'
                }}
            >
                <div
                    style={{
                        width: "30px",
                        height: "3px",
                        background: "black",
                        marginBottom: "5px",
                    }}
                ></div>
                <div
                    style={{
                        width: "30px",
                        height: "3px",
                        background: "black",
                        marginBottom: "5px",
                    }}
                ></div>
                <div
                    style={{
                        width: "30px",
                        height: "3px",
                        background: "black",
                        marginBottom: "5px",
                    }}
                ></div>
            </div>

            <Drawer
                anchor="right"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                transitionDuration={300}
            >
                <List
                    style={{
                        width: "100vw",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.8)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingLeft: 35,
                    }}
                >
                    <ListItem
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <img
                            style={{
                                width: 25,
                                height: 25,
                                marginRight: 20,
                            }}
                            src={about}
                        />
                        <a
                            onClick={() => setIsOpen(false)}
                            id="nav_link"
                            href="/#about"
                            style={{
                                color: "white",
                                fontSize: 27,
                                textDecoration: "none",
                                display: "block",
                                textAlign: "center",
                            }}
                        >
                            About
                        </a>
                    </ListItem>

                    <ListItem
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <img
                            style={{
                                width: 25,
                                height: 25,
                                marginRight: 20,
                            }}
                            src={skills}
                        />
                        <a
                            onClick={() => setIsOpen(false)}
                            id="nav_link"
                            href="/#skills"
                            style={{
                                color: "white",
                                fontSize: 27,
                                textDecoration: "none",
                                display: "block",
                                textAlign: "center",
                            }}
                        >
                            Skills
                        </a>
                    </ListItem>

                    <ListItem
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <img
                            style={{
                                width: 25,
                                height: 25,
                                marginRight: 20,
                            }}
                            src={works}
                        />
                        <a
                            onClick={() => setIsOpen(false)}
                            id="nav_link"
                            href="/#works"
                            style={{
                                color: "white",
                                fontSize: 27,
                                textDecoration: "none",
                                display: "block",
                                textAlign: "center",
                            }}
                        >
                            Works
                        </a>
                    </ListItem>

                    <ListItem
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <img
                            style={{
                                width: 25,
                                height: 25,
                                marginRight: 20,
                            }}
                            src={contact}
                        />
                        <a
                            onClick={() => setIsOpen(false)}
                            id="nav_link"
                            href="/#contact"
                            style={{
                                color: "white",
                                fontSize: 27,
                                textDecoration: "none",
                                display: "block",
                                textAlign: "center",
                            }}
                        >
                            Contact
                        </a>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default MobileMenu;
