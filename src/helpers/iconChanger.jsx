export const iconSetter = (theme: string) => {
    if (theme === "dark") {
        return {
            facebook: "facebook-light.png",
            instagram: "instagram-light.png",
            github: "github-light.png",
            linkedin: "linkedin-light.png",
            mobile: "mobile-light.png",
            web: "web-light.png",
        };
    }
    return {
        facebook: "facebook-dark.png",
        instagram: "instagram-dark.png",
        github: "github-dark.png",
        linkedin: "linkedin-dark.png",
        mobile: "mobile-dark.png",
        web: "web-dark.png",
    };
};
