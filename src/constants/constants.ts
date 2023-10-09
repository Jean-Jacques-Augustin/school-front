import DashboardLinkType from "../types/dashboardLink";
import React from "react";
import {
  Person as PersonIcon,
  School as SchoolIcon,
  LibraryBooks as LibraryBooksIcon,
  Class as ClassIcon,
  Note as NoteIcon,
  EventBusy as EventBusyIcon,
  Payment as PaymentIcon,
  Group as GroupIcon,
  Settings as SettingsIcon,
  Delete as DeleteIcon,
  BrushTwoTone,
  RequestQuote,
  ContactMail,
  Login,
} from "@mui/icons-material";

export const constantes = {
  API_URL: "https://api.github.com",
};

export const navlinks = [
  {
    name: "Accueil",
    path: "/",
    icon: React.createElement(BrushTwoTone),
  },
  {
    name: "À propos",
    path: "/about",
    icon: React.createElement(RequestQuote),
  },
  {
    name: "Contact",
    path: "/contact",
    icon: React.createElement(ContactMail),
  },
  {
    name: "Connexion",
    path: "/login",
    icon: React.createElement(Login),
  },
];

export const dashboardLink: DashboardLinkType[] = [
  {
    name: "Étudiants",
    path: "/students",
    icon: React.createElement(PersonIcon),
  },
  {
    name: "Professeurs",
    path: "/teachers",
    icon: React.createElement(SchoolIcon),
  },
  {
    name: "Matériaux",
    path: "/subjects",
    icon: React.createElement(LibraryBooksIcon),
  },
  {
    name: "Classes",
    path: "/classes",
    icon: React.createElement(ClassIcon),
  },
  {
    name: "Notes",
    path: "/marks",
    icon: React.createElement(NoteIcon),
  },
  {
    name: "Absences",
    path: "/absences",
    icon: React.createElement(EventBusyIcon),
  },
  {
    name: "Paiements",
    path: "/payments",
    icon: React.createElement(PaymentIcon),
  },
  {
    name: "Utilisateurs",
    path: "/users",
    icon: React.createElement(GroupIcon),
  },
  {
    name: "Paramètres",
    path: "/settings",
    icon: React.createElement(SettingsIcon),
  },
  {
    name: "Supprimer un compte",
    path: "/delete",
    icon: React.createElement(DeleteIcon),
  },
];
