import * as React from 'react';

import { LinkEntity } from '../../model';

import { removeElementFromArray, appendElementToArray, updateElementFromArray, colors } from '../../common';
import { LinkFormComponent } from '../form';
import { Button, CardActionArea, Card, CardContent, CardActions } from '@material-ui/core';
import { createEmptyLink } from '.';
import { Save, Cancel, Edit, Delete } from '@material-ui/icons';
import { toast } from 'react-toastify';
import { css } from 'emotion';

interface Props {
  links: Array<LinkEntity>;
}
interface State {
  links: Array<LinkEntity>;
  showlink: boolean;
  hideComponent: boolean;
}

export class LinksComponent extends React.Component<Props, State> {
  public prevState: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      links: this.props.links,
      showlink: false,
      hideComponent: true,
    };
    this.prevState = this.state;
  }

  public removeItem = index => {
    if (index === -1) {
      index = this.state.links.length || 0;
    }
    const newState: State = { ...this.state };
    newState.links = removeElementFromArray(this.state.links, item => item === this.state.links[index]);
    this.setState(newState);
  };
  public handleSubmit = (index: number) => {
    if (index === -1) {
      index = this.state.links.length || 0;
    }
    const newArray: Array<LinkEntity> = appendElementToArray(this.state.links, this.state.links[index]);
    newArray[index].editable = false;
    const newState = {
      ...this.state,
      links: newArray,
    };

    this.setState(newState);
  };
  public handleChange = (index: number) => (fieldName: string, value: any, group: string) => {
    if (index === -1) {
      index = this.state.links.length || 0;
    }
    const element: LinkEntity = {
      ...this.state[fieldName][index],
      data: value,
    };
    if (element.editable === null) {
      element.editable = true;
    }

    element.editable = true;
    const newList = updateElementFromArray(
      this.state[fieldName],
      element,
      item => item === this.state[fieldName][index]
    );

    const newState = {
      ...this.state,
      [fieldName]: newList,
    };
    this.setState(newState);
  };

  public addNewlink = () => {
    const element = createEmptyLink();
    const newList = appendElementToArray(this.state.links, element);

    this.setState({
      links: newList,
      showlink: !this.state.showlink,
    });
  };

  public handleHideComponent = () => this.setState({ ...this.state, hideComponent: !this.state.hideComponent });

  public onEdit = (index: number) => {
    if (index === -1) {
      index = this.state.links.length || 0;
    }

    const element: LinkEntity = { ...this.state.links[index] };
    element.editable = !element.editable;
    const newState: State = {
      ...this.state,
    };
    newState.links[index] = element;

    this.setState(newState);
  };
  public savelink = (index: number, value: LinkEntity) => {
    if (index === -1) {
      index = this.state.links.length || 0;
    }
    const element = {
      data: value.data,
      editable: !this.state.links[index].editable,
    };
    const newList = updateElementFromArray(this.state.links, element, item => item === this.state.links[index]);

    const newState = {
      ...this.state,
      links: newList,
    };

    this.setState(newState);
    this.prevState = newState; // update content for prevState with the saved data
    toast.success('Guardado');
  };

  public onCancel = (index: number) => {
    if (this.state.links.length > this.prevState.links.length) {
      this.removeItem(index);
    } else {
      const newState: State = { ...this.prevState };
      newState.links[index].editable = false;
      this.setState(newState);
    }
  };

  // styles
  public wrapperStyles = css`
    margin-left: 10%;
    margin-right: 10%;
  `;
  public divStyles = css`
    width: 100%;
    border: 1px solid;
    border-radius: 8px;
    border-color: ${colors.GREEN};
    background-color: white;
  `;
  public h2Styled = css`
    width: 100%;
    margin-top: 2%;
    margin-bottom: 0.5%;
    text-align: center;
    background-color: ${colors.GREEN};
    color: ${colors.YELLOW};
    border-radius: 10px;
  `;

  public listStyle = css`
    padding: 0px;
  `;

  // endStyles

  public render() {
    return (
      <div className={this.wrapperStyles}>
        <h2 className={this.h2Styled} onClick={() => this.handleHideComponent()}>
          Conexiones
        </h2>
        <div hidden={this.state.hideComponent}>
          {this.state.links.map((link: LinkEntity, index: number) => (
            <Card key={index}>
              <CardActionArea>
                <CardContent>
                  {link.editable ? (
                    <LinkFormComponent
                      key={index}
                      link={link}
                      onChange={this.handleChange(index)}
                      editable={this.state.links[index].editable}
                    />
                  ) : (
                    link.data
                  )}
                </CardContent>
              </CardActionArea>
              <CardActions>
                {link.editable ? (
                  <>
                    <Button onClick={() => this.savelink(index, link)}>
                      {' '}
                      <Save />
                    </Button>
                    <Button onClick={e => this.onCancel(index)}>
                      <Cancel />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={e => this.onEdit(index)}>
                      <Edit />
                    </Button>
                    <Button onClick={e => this.removeItem(index)}>
                      <Delete />
                    </Button>
                  </>
                )}
              </CardActions>
            </Card>
          ))}
          <Button onClick={e => this.addNewlink()}>Añadir una Conexión</Button>
        </div>
      </div>
    );
  }
}
