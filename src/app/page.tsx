"use client";
import {
  Card,
  CssBaseline,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import styles from "./page.module.css";
import { useState } from "react";
import { getIconUrl, houseMap } from "./house-map";
import Image from "next/image";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Home() {
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const handleChange = async (event: SelectChangeEvent) => {
    if (event.target.value) {
      setLoading(true);
      setSelectedChoice(event.target.value);
      await new Promise((f) => setTimeout(f, 2500));
      const index = Math.floor(Math.random() * 2);
      setDescription(
        houseMap[event.target.value].descriptions[index] as string
      );
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main className={styles.main}>
        {!selectedChoice ? (
          <Card
            variant="outlined"
            style={{
              padding: 15,
              minWidth: 600,
              minHeight: 800,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormControl sx={{ alignSelf: "center", m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                House
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="House"
                onChange={handleChange}
                value={selectedChoice}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Object.keys(houseMap).map((key) => (
                  <MenuItem key={key} value={key}>
                    {key}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                What house do you feel like you would belong to?
              </FormHelperText>
            </FormControl>
            <Image
              style={{
                alignSelf: "flex-end",
                background: "transparent",
              }}
              alt="A sorting hat"
              priority={true}
              src="/sortinghat.png"
              width={400}
              height={300}
            />
          </Card>
        ) : loading ? (
          <div>
            <Image
              className={styles.spinner}
              src="/broomstick.jpg"
              width={500}
              height={500}
              alt="A broomstick"
            />
          </div>
        ) : (
          <Card
            variant="outlined"
            style={{
              padding: 15,
              minWidth: 600,
              minHeight: 800,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                maxWidth: "400px",
                margin: "50px",
                whiteSpace: "pre-wrap",
              }}
            >
              {description}
            </p>
            <Image
              style={{
                alignSelf: "center",
                background: "transparent",
              }}
              alt="The chosen house"
              src={getIconUrl(description)}
              width={436}
              height={489}
            />
          </Card>
        )}
      </main>
      ;
    </ThemeProvider>
  );
}
