import {
  DescriptionProfileListStyled,
  EmptyListStyled,
  InformationsListStyled,
  ItemListStyled,
  ListStyled,
  PriceProfileListStyled,
  ProfileNameListStyled,
  ProfilePhotoListStyled,
} from "./styles";
import { Teacher } from "../../@types/teacher";
import { Button } from "@mui/material";
import { FormatterService } from "../../services/FormatterService";

interface ListProps {
  teachers: Teacher[],
  onSelect: (teacher: Teacher) => void
}

const List = (props: ListProps) => {
  return (
    <>
        {props.teachers.length > 0 ? (
            <ListStyled>
                {props.teachers.map((teacher) => (
                    <ItemListStyled key={teacher.id}>
                        <ProfilePhotoListStyled src={teacher.photo}></ProfilePhotoListStyled>
                        <InformationsListStyled>
                        <ProfileNameListStyled>{teacher.name}</ProfileNameListStyled>
                        <PriceProfileListStyled>{FormatterService.monetaryValue(teacher.price)} / Hora</PriceProfileListStyled>
                        <DescriptionProfileListStyled>
                            {FormatterService.limiterText(teacher.description, 200)}
                        </DescriptionProfileListStyled>
                        <Button onClick={() => props.onSelect(teacher)} sx={{ width: "70%" }}>Marcar Aula com {teacher.name}</Button>
                        </InformationsListStyled>
                    </ItemListStyled>
                ))}
          </ListStyled>
        ) : (
            <EmptyListStyled>Nenhum item encontrado.</EmptyListStyled>
        )}
    </>
  );
};

export default List;
