import { styled } from '@mui/material';



export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(10, 2, 10, 2)};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme}) => theme.spacing(9)};

    ${({theme}) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({theme}) => theme.spacing(8)};
    }
`;

export const ItemListStyled = styled('li')`
    list-style: none;
`;

export const ProfilePhotoListStyled = styled('img')`
    width: 100%;
    border-radius: 0 10% 0 0;

    ${({theme}) => theme.breakpoints.down('md')} {
        border-radius: 5%;
    }
`;

export const InformationsListStyled = styled('div')`
    color: white;
`;

export const ProfileNameListStyled = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
    color: white;
`;

export const PriceProfileListStyled = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main};
`;

export const DescriptionProfileListStyled = styled('p')`
    word-break: break-word;
`;

export const EmptyListStyled = styled('h2')`
    text-align: center;
    padding: ${({theme}) => theme.spacing(20, 0)};
`;