"use client";
import {
    DeleteBoardDocument,
    FetchBoardsDocument,
} from "@/commons/graphql/graphql";
import { useMutation } from "@apollo/client";

export default function useHooksDelete() {
    const [deleteBoard] = useMutation(DeleteBoardDocument);

    const onClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const target = e.target as HTMLButtonElement;
        deleteBoard({
            variables: {
                boardId: target.id,
            },
            refetchQueries: [
                { query: FetchBoardsDocument, variables: { number: 1 } },
            ],
        });
        alert("삭제완료!!");
    };

    return onClickDelete;
}
