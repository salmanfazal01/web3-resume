import { Box, Button, Drawer, Stack, Typography } from "@mui/material";
import React from "react";
import resumeData from "../lib/resumeData";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WorkIcon from "@mui/icons-material/Work";
import CustomPaper from "../components/CustomPaper.jsx";

export const drawerWidth = 140;

const { profilePicture, name, title, email, address, socials, about } =
  resumeData;

const Item = ({ name, link, Icon }) => (
  <Stack spacing={1.5} direction="row" alignItems="center">
    <Icon sx={{ fontSize: 22 }} />

    {link ? (
      <a href={link} target="_blank" style={{ textDecoration: "none" }}>
        <Typography variant="body2" color="text.secondary" sx={{ pt: 0.5 }}>
          {name}
        </Typography>
      </a>
    ) : (
      <Typography variant="body2" color="text.secondary" sx={{ pt: 0.5 }}>
        {name}
      </Typography>
    )}
  </Stack>
);

const ProfileSection = () => {
  return (
    <Box
      sx={{
        alignSelf: "flex-start",
        position: "sticky",
        top: 0,
        width: 280,
        p: 3,
      }}
    >
      <Stack alignItems="center" sx={{ mb: 3 }}>
        <img
          src={profilePicture}
          style={{
            // width: "100%",
            maxHeight: 100,
            objectFit: "contain",
            borderRadius: "30px",
          }}
        />

        <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Stack>

      <Button
        variant="contained"
        fullWidth
        sx={{ p: 2, color: "text.primary", borderRadius: 4, height: 48 }}
      >
        Download CV
      </Button>

      <Stack spacing={2.5} sx={{ mt: 4 }}>
        <Item name={name} Icon={PersonIcon} />

        <Item name={title} Icon={WorkIcon} />

        <Item name={address} Icon={LocationOnIcon} />

        <Item name={email} Icon={AlternateEmailIcon} />

        <Item
          name={socials.gitHub.text}
          Icon={socials.gitHub.icon}
          link={socials.gitHub.link}
        />

        <Item
          name={socials.linkedIn.text}
          Icon={socials.linkedIn.icon}
          link={socials.linkedIn.link}
        />

        <Item
          name={socials.twitter.text}
          Icon={socials.twitter.icon}
          link={socials.twitter.link}
        />
      </Stack>

      <CustomPaper sx={{ p: 2, mt: 5 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 300, whiteSpace: "pre-line" }}
        >
          {about}
        </Typography>
      </CustomPaper>
    </Box>
  );
};

export default ProfileSection;
