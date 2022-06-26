import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Chip, CircularProgress, Grid, List, ListItem, Paper, Tab, Tabs, Typography } from "@mui/material";
import { getParents, setParent } from "../../../store/slices/parents";
import { getChilds, setChildsByParent } from "../../../store/slices/childs";
import { getCategories, setCategory } from "../../../store/slices/categories";
import { Child } from "../child/Child.jsx";
import "./Parent.css";

export const Parent = () => {
  const [value, setValue] = useState(0);
  const {parents, isLoading, parent} = useSelector(state => state.parents);
  const {isLoadingChilds, childsByParent} = useSelector(state => state.childs);
  const {categories, category} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getCategories());
  }, [])
  useEffect(() => {

    dispatch(getChilds());
  }, [])
  useEffect(() => {

    dispatch(getParents());
  }, [])
  useEffect(() => {
    if(parent !== null) { 
      dispatch(setChildsByParent({idParent:parent.id, idCategory:category?.id}));
    }
  }, [parent, category])
  

  const handleChange = (event, newValue) => {
    dispatch(
      setParent({...parents[newValue]})
    );

    setValue(newValue);

  };
  const handleSelectCategory = (category) => {
    dispatch(setCategory({...category}))
  }
  return (
    <Grid id="parent" item sx={{
        width:'100%',
        height:'calc(100vh - 64px)',
      }}>
        <Grid container direction="column" alignItems="center" sx={{mt:"20px"}}>

          <Typography variant="h2" fontWeight="bold" color="secondary.main">Amenidades</Typography>
          {
            !isLoading ? 
            <>
              <Tabs value={value} onChange={handleChange} centered sx={{mt:"20px"}}>
                {
                  parents.map(parent => (
                    <Tab key={parent.id} label={parent.name} />

                  ))
                }
              </Tabs>
              <Grid container direction="row" justifyContent="center">
                {
                  !isLoadingChilds ?
                    <>
                    <Paper className="chip-list" component="ul" sx={{display:"flex", justifyContent:"center", flexWrap:"wrap", listStyle:"none", p:0.5}}>
                      {
                        categories.map(cate => (
                          <ListItem key={cate.id} sx={{width:'auto', cursor:'pointer'}} onClick={() => handleSelectCategory(cate)}>
                            <Chip label={cate.category} color={category.id == cate.id ? 'secondary' : 'default'}></Chip>
                          </ListItem>
                        ))
                      }

                    </Paper>
                      {
                        childsByParent.length > 0 ?
                          <div style={{width:'100%'}}>

                            <Box sx={{height:300, display:'flex', flexDirection:'row', flexWrap:'wrap', overflowY:'scroll'}}>
                              {

                                childsByParent.map(item => (
                                  <Child key={item.id} item={item}></Child>
                                ))
                              }

                            </Box>
                          </div>
                        :
                         <Typography >Sin Información</Typography>
                      }
                    </>
                  :
                      <CircularProgress />
                }
              </Grid>
            </>

            :
              <CircularProgress />
          }
        </Grid>
      </Grid>
  )
}
