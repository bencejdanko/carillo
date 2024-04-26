import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-DTSylQif.js';
import { M as Menubar, a as Menu, b as Menubar_item } from './index2-DmYOMU5P.js';
import { C as Card, a as Card_header, b as Card_title, B as Button } from './card-title-C6YlrkIb.js';
import { C as Card_content } from './card-content-DK8Gu6PG.js';
import { C as Card_description, T as Table, a as Table_body, b as Table_row, c as Table_cell, P as Progress } from './progress-CPcosjI1.js';
import 'clsx';

const MNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Menubar, "Menubar.Root").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Menu, "Menubar.Menu").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Menubar_item, "Menubar.Item").$$render($$result, {}, {}, {
            default: () => {
              return `testing`;
            }
          })} ${validate_component(Menubar_item, "Menubar.Item").$$render($$result, {}, {}, {
            default: () => {
              return `testing`;
            }
          })}`;
        }
      })}`;
    }
  })}</main>`;
});
const Jobs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="grid grid-cols-2 m-2 gap-2">${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                default: () => {
                  return `Clayton Carillo`;
                }
              })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
                default: () => {
                  return `Checkin Time`;
                }
              })}`;
            }
          })} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `RO # Tag`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `Customer Vehicle`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `Promised`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `15423`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Toyota Honda`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(new Date(Date.now()).toISOString())}`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                            default: () => {
                              return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
            default: () => {
              return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Current`;
                    }
                  })}`;
                }
              })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                            default: () => {
                              return `Oil Change`;
                            }
                          })} ${validate_component(Progress, "Progress").$$render($$result, { value: "50" }, {}, {})}
                                2.0 Hours`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
            default: () => {
              return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Assigned`;
                    }
                  })}`;
                }
              })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                            default: () => {
                              return `Oil Change`;
                            }
                          })} ${validate_component(Progress, "Progress").$$render($$result, { value: "50" }, {}, {})}
                                2.0 Hours`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
            default: () => {
              return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Completed`;
                    }
                  })}`;
                }
              })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                            default: () => {
                              return `Oil Change`;
                            }
                          })} ${validate_component(Progress, "Progress").$$render($$result, { value: "50" }, {}, {})}
                                2.0 Hours`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                default: () => {
                  return `Clayton Carillo`;
                }
              })} ${validate_component(Card_description, "Card.Description").$$render($$result, {}, {}, {
                default: () => {
                  return `Checkin Time`;
                }
              })}`;
            }
          })} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `RO # Tag`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `Customer Vehicle`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                        default: () => {
                          return `Promised`;
                        }
                      })}`;
                    }
                  })} ${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `15423`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `Toyota Honda`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${escape(new Date(Date.now()).toISOString())}`;
                        }
                      })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                            default: () => {
                              return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
                            }
                          })}`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
            default: () => {
              return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Current`;
                    }
                  })}`;
                }
              })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                            default: () => {
                              return `Oil Change`;
                            }
                          })} ${validate_component(Progress, "Progress").$$render($$result, { value: "50" }, {}, {})}
                                2.0 Hours`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
            default: () => {
              return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Assigned`;
                    }
                  })}`;
                }
              })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                            default: () => {
                              return `Oil Change`;
                            }
                          })} ${validate_component(Progress, "Progress").$$render($$result, { value: "50" }, {}, {})}
                                2.0 Hours`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
            default: () => {
              return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
                    default: () => {
                      return `Completed`;
                    }
                  })}`;
                }
              })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                        default: () => {
                          return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                            default: () => {
                              return `Oil Change`;
                            }
                          })} ${validate_component(Progress, "Progress").$$render($$result, { value: "50" }, {}, {})}
                                2.0 Hours`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}</main>`;
});
const MRepairs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
            default: () => {
              return `Open Repair Orders`;
            }
          })}`;
        }
      })} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `RO # Tag`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Customer Vehicle`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Opened`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Promised`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Updated`;
                    }
                  })}`;
                }
              })} ${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `15423`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Toyota Honda`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(new Date(Date.now()).toISOString())}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(new Date(Date.now()).toISOString())}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(new Date(Date.now()).toISOString())}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                        default: () => {
                          return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</main>`;
});
const Appointments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
            default: () => {
              return `Appointments`;
            }
          })}`;
        }
      })} ${validate_component(Table, "Table.Root").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Table_body, "Table.Body").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Name`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Time`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "font-medium" }, {}, {
                    default: () => {
                      return `Details`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, { class: "" }, {}, {
                    default: () => {
                      return `Status`;
                    }
                  })}`;
                }
              })} ${validate_component(Table_row, "Table.Row").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `Pablo Picasso`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(new Date(Date.now()).toISOString())}`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
                    }
                  })} ${validate_component(Table_cell, "Table.Cell").$$render($$result, {}, {}, {
                    default: () => {
                      return `input`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</main>`;
});
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Card, "Card.Root").$$render($$result, { class: "m-2" }, {}, {
    default: () => {
      return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Card_title, "Card.Title").$$render($$result, {}, {}, {
            default: () => {
              return `Analytics`;
            }
          })}`;
        }
      })} ${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="m-2" data-svelte-h="svelte-onef9x">Days Revenue: $10,000</div> <div class="grid grid-cols-2 gap-2">${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                    default: () => {
                      return `Clayton Carrilo`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                    default: () => {
                      return `Clayton Carrilo`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                    default: () => {
                      return `Clayton Carrilo`;
                    }
                  })}`;
                }
              })}`;
            }
          })} ${validate_component(Card, "Card.Root").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Card_content, "Card.Content").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Card_header, "Card.Header").$$render($$result, {}, {}, {
                    default: () => {
                      return `Clayton Carrilo`;
                    }
                  })}`;
                }
              })}`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}</main>`;
});

export { Appointments as A, Jobs as J, MNav as M, MRepairs as a, Analytics as b };
//# sourceMappingURL=Analytics-EUxUvst_.js.map
