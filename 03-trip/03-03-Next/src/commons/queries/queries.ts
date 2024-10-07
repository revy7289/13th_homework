"use client";
import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
    mutation creteBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`;

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`;

export const FETCH_LIST = gql`
    query fetchBoards($number: Int) {
        fetchBoards(page: $number) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`;

export const UPDATE_BOARD = gql`
    mutation updateBoard(
        $boardId: ID!
        $password: String
        $updateBoardInput: UpdateBoardInput!
    ) {
        updateBoard(
            boardId: $boardId
            password: $password
            updateBoardInput: $updateBoardInput
        ) {
            _id
            writer
            title
            contents
            updatedAt
        }
    }
`;

export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;