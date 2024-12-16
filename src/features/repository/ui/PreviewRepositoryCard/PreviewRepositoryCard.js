import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CopyURL, GithubFork, GithubStarFilled, HeartOutlined, } from "@/shared/ui/icons";
import { Link } from "react-router";
import HeartFilled from "@/shared/ui/icons/HeartFilled";
import { toast } from "react-toastify";
import CopyToClipboard from "react-copy-to-clipboard";
import s from "./PreviewRepositoryCard.module.css";
export const PreviewRepositoryCard = ({ avatar, stars, forks, userName, repoName, id, repoUrl, handleFavoriteClick, isFavorite, }) => {
    return (_jsxs("div", { className: s.card, children: [_jsxs("div", { className: s.about, children: [_jsxs("div", { className: s.aboutHeader, children: [_jsx("img", { alt: "avatar", src: avatar, width: 32, height: 32, className: s.avatar }), _jsxs("div", { className: s.statistics, children: [_jsxs("div", { className: s.statWrapper, children: [_jsx(GithubStarFilled, {}), _jsx("span", { children: stars })] }), _jsxs("div", { className: s.statWrapper, children: [_jsx(GithubFork, {}), _jsx("span", { children: forks })] })] })] }), _jsxs("div", { className: s.aboutMain, children: [_jsxs("span", { className: s.userName, children: ["@", `${userName}`] }), _jsx("span", { className: s.repoName, children: repoName })] })] }), _jsxs("div", { className: s.aboutFooter, children: [_jsxs("div", { className: s.actions, children: [_jsx("button", { className: s.actionWrapper, onClick: () => handleFavoriteClick(id), children: isFavorite ? _jsx(HeartFilled, {}) : _jsx(HeartOutlined, {}) }), _jsx(CopyToClipboard, { text: repoUrl, onCopy: () => toast.info(`Repository's address copied`, { autoClose: 1000 }), children: _jsx("button", { className: s.actionWrapper, children: _jsx(CopyURL, {}) }) })] }), _jsx(Link, { to: `/repositories/${id}`, className: s.linkToRepo, children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435" })] })] }));
};
