"use client"
import { useEffect, useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  background-color: green;
  color: white;
  padding: 10px;
`;

const TableCell = styled.td`
  border: 1px solid lightgray;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: lightgray;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export default function Page() {
    const [receipes, setreceipes] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => setreceipes(data.recipes.slice(0, 10)));
    }, []);

    return (
        <>
            <Title>Table of Recipes</Title>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Prep Time in Mins</TableHeader>
                        <TableHeader>Servings</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {
                        receipes.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.prepTimeMinutes}</TableCell>
                                <TableCell>{item.servings}</TableCell>
                            </TableRow>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}